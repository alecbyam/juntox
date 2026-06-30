import os
import py_compile

base = os.path.join(os.getcwd(), 'backend', 'app')
for root, _, files in os.walk(base):
    for name in files:
        if name.endswith('.py'):
            py_compile.compile(os.path.join(root, name), doraise=True)
print('backend syntax ok')
