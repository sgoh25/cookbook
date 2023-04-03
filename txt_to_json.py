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


def convert_to_json(in_file, output):
    data_dict = {}
    with open(in_file) as f:
        is_title = True
        key = ""
        index = 0
        for line in f:
            line_str = line.strip("\n").rstrip()
            if is_title:
                data_dict["Title"] = line_str
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
                if key not in data_dict:
                    data_dict[key] = [format_s]
                else:
                    data_dict[key].append(format_s)

    if output.is_dir():
        out_file = Path(output) / f"{Path(in_file).stem}.json"
    elif output.is_file():
        out_file = Path(output)
    with open(out_file, "w") as out:
        json.dump(data_dict, out, indent=4)


def parse_path(path, output):
    for p in Path(path).iterdir():
        if p.is_dir():
            parse_path(p, output)
        if p.is_file() and p.suffix == ".txt":
            # Convert to json
            convert_to_json(p, output)


def main():
    parser = argparse.ArgumentParser(description="Convert txt file to json")
    parser.add_argument(
        "path",
        metavar="PATH",
        type=Path,
        help="Path to txt file or directory",
    )
    parser.add_argument(
        "--output",
        "-o",
        metavar="PATH",
        type=Path,
        default="public/recipe_json",
        help="Path for output json file",
    )
    args = parser.parse_args()

    parse_path(args.path, args.output)


if __name__ == "__main__":
    sys.exit(main())
