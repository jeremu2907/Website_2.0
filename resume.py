import shutil
import os

shutil.copy(open(open(".gitignore", "r").readline(),"r").readline(), os.getcwd())
os.system("git add .")
os.system("git commit -m 'Resumeupdate' ")
os.system("git push")