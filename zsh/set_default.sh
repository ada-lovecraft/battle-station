#!/bin/bash
echo "Setting zsh shell as default"

echo "/bin/zsh" | sudo tee -a /etc/shells

chsh -s /bin/zsh
