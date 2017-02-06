#!/bin/bash
echo "Setting zsh shell as default"

echo "/usr/local/bin/zsh" | sudo tee -a /etc/shells

chsh -s /bin/zsh
