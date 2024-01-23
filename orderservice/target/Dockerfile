# Use Ubuntu as the base image
FROM ubuntu:latest

# Update the package list and install necessary tools
RUN apt-get update && \
    apt-get install -y curl

#downloading java-21
RUN curl -O https://download.oracle.com/java/21/latest/jdk-21_linux-x64_bin.deb

#Installing the package
RUN dpkg -i jdk-21_linux-x64_bin.deb


# Set environment variables
ENV JAVA_HOME /usr/lib/jvm/java-21-oracle
ENV PATH $JAVA_HOME/bin:$PATH

# Set the working directory in the container
WORKDIR /app

COPY src/main/resources/application.properties /app/application.properties

# Copy the application JAR and properties file into the container
COPY orderservice-0.0.1-SNAPSHOT.jar /app/orderservice-0.0.1-SNAPSHOT.jar

# Specify the command to run your application
CMD ["java", "-jar", "orderservice-0.0.1-SNAPSHOT.jar" ]