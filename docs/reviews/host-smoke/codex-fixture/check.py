from pathlib import Path
import re
p = re.search(r'href="([^"]+)"', Path("index.html").read_text())[1]
assert Path(p).is_file(), "guide target missing: " + p
print("PASS: guide target exists")
