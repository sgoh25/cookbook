#!/usr/bin/env python3

from pathlib import Path
import argparse
import json
import sys


def format_str(key, s, index):
    if key == "Statistics":
        return index, s.replace(" - ", ": ")
    elif key == "Directions":
        index += 1
        return index, f"{index}. {s}"
    return index, s


def convert_to_json(in_file, data_dict):
    data_dict[in_file.stem] = {}
    in_data = data_dict[in_file.stem]
    with open(in_file) as f:
        is_title = True
        key = ""
        index = 0
        for line in f:
            line_str = line.strip("\n").rstrip()
            if is_title:
                in_data["Title"] = line_str
                is_title = False
            elif line_str == "Statistics:":
                key = "Statistics"
            elif line_str == "Ingredients:":
                key = "Ingredients"
            elif line_str == "Directions:":
                key = "Directions"
            else:
                if not key or line == "\n":
                    continue
                index, format_s = format_str(key, line_str, index)
                if key not in in_data:
                    in_data[key] = [format_s]
                else:
                    in_data[key].append(format_s)
    return data_dict


def parse_path(in_path, data_dict):
    if in_path.is_dir():
        for p in in_path.iterdir():
            data_dict.update(parse_path(p, data_dict))
    elif in_path.is_file() and in_path.suffix == ".txt":
        data_dict.update(convert_to_json(in_path, data_dict))
    return data_dict


def main():
    parser = argparse.ArgumentParser(description="Convert txt file to json")
    parser.add_argument(
        "--input",
        "-i",
        metavar="INPUT",
        type=Path,
        default=Path("public/recipe_txt"),
        help="Path to txt file or directory",
    )
    parser.add_argument(
        "--output",
        "-o",
        metavar="OUTPUT",
        type=Path,
        default=Path("public/recipes.json"),
        help="Path for output json file",
    )
    args = parser.parse_args()

    new_data = parse_path(args.input, {})

    with open(args.output, "r") as out:
        try:
            out_data = json.load(out)
            out_data.update(new_data)
        except json.decoder.JSONDecodeError:
            out_data = new_data
    with open(args.output, "w") as out:
        json.dump(dict(sorted(new_data.items())), out, indent=4)


if __name__ == "__main__":
    sys.exit(main())
