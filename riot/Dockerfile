# Set the base image to use for this Dockerfile
FROM maven:3.8.7-openjdk-18-slim

# Set the working directory
WORKDIR /app

# Copy the Maven executable and the project's pom.xml and package files to the container
COPY mvnw .
COPY mvnw.cmd .
COPY pom.xml .
COPY src/ src/
COPY ./target/riot-0.0.1-SNAPSHOT.jar ./riot-0.0.1-SNAPSHOT.jar

# Run Maven to download dependencies and build the application
RUN chmod 777 mvnw

EXPOSE 8080

# Set the default command to run the Spring Boot application
CMD java -jar ./riot-0.0.1-SNAPSHOT.jar