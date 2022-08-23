import shutil
import os

shutil.copy(open(open(".gitignore", "r").readline(),"r").readline(), os.getcwd())