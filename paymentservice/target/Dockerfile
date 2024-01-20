# Use an official OpenJDK runtime as a parent image
FROM openjdk:11-jre-slim

# Set the working directory to /app
WORKDIR /app

# Copy the JAR file into the container at /app
COPY paymentservice-0.0.1-SNAPSHOT.jar /app/

# Specify the command to run on container start
CMD ["java", "-jar", "paymentservice-0.0.1-SNAPSHOT.jar"]