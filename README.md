## Proof of concept using bit with react

# Register

Register for bit account on https://bit.dev/

# Install BIT

MACOS : 

brew install bit

UBUNTU : 

sudo apt-get update && sudo apt-get install ca-certificates
sudo sh -c "echo 'deb [trusted=true] https://bitsrc.jfrog.io/bitsrc/bit-deb all stable' >> /etc/apt/sources.list"
sudo apt-get update && sudo apt-get install bit

Source : https://docs.bit.dev/docs/installation

# Usage (CREATE BIT PACKAGE)

0. Login with command 'bit login' (will trigger browser popup)
1. Initialize bit workspace with command 'bit init'
2. 'bit import bit.envs/compilers/react --compiler' 
3. 'bit add components/COMPONENT_NAME or * to select all folder
4. 'bit build' (for react components, regular function doesn't need this)
5. 'bit tag --all 1.0.0' (this is similar to git commit, 1.0.0 is the package version)
6. 'bit export jemikanegara.cra-graphql' (jemikanegara is bit username, cra-graphql is the collection)

Source : https://docs.bit.dev/docs/tutorials/bit-react-tutorial

# Usage (USE BIT PACKAGE)

Once we export the packages, bit automatically create downloadable packages on NPM and YARN, so we just need to do regular install, example:

npm install or yarn add :
npm i @bit/jemikanegara.cra-graphql.sign-up
yarn add @bit/jemikanegara.cra-graphql.sign-up