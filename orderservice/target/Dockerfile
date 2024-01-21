# Use Ubuntu as the base image
FROM ubuntu:latest

# Update the package list and install necessary tools
RUN apt-get update && \
    apt-get install -y curl

# Download and install OpenJDK 21
RUN curl -O https://download.java.net/java/early_access/jdk21/29/GPL/openjdk-21_linux-x64_bin.tar.gz && \
    tar -zxvf openjdk-21_linux-x64_bin.tar.gz && \
    mv jdk-21 /usr/local/openjdk-21 && \
    rm openjdk-21_linux-x64_bin.tar.gz

# Set environment variables
ENV JAVA_HOME /usr/local/openjdk-21
ENV PATH $PATH:$JAVA_HOME/bin

# Set the working directory in the container
WORKDIR /app

# Copy the application JAR and properties file into the container
COPY target/orderservice-0.0.1-SNAPSHOT.jar /app/orderservice-0.0.1-SNAPSHOT.jar
COPY application.properties /app/application.properties

# Specify the command to run your application
CMD ["java", "-jar", "orderservice-0.0.1-SNAPSHOT.jar", "--spring.config.location=/app/application.properties"]
