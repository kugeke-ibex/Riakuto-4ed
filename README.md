# Riakuto-4ed

# Advance preparation

## Install asdf
Installing by homebrew 

```
brew install asdf
echo -e "\n. $(brew --prefix asdf)/libexec/asdf.sh" >> ~/.zshrc
exec $SHELL -l
source ~/.zshrc
```

## Make .default-npm-packages And Install Node.js
Create a file named `.default-npm-packages` in your home directory and write the following

```
yarn
typescript
ts-node
typesync
npm-check-updates
```

Go to working directory and install Node.js

```
asdf plugin add nodejs
asdf install nodejs 20.8.0
asdf local nodejs 20.8.0
```




