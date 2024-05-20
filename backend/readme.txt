Readme Backend:


Ensure that Docker is installed and running. Ensure you have atleast 40 GB GPU.

in the root directory, run this to build the docker container:

docker build -t iitbhudb .


once built, run:

docker run -d -p 8000:8000 iitbhudb

