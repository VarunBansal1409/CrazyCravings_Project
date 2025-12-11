# Use a base image with Java 17
FROM eclipse-temurin:17-jdk-alpine

# Set the working directory
WORKDIR /app

# Copy the maven executable wrapper and pom.xml
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Make the wrapper executable (linux only, but good practice)
RUN chmod +x mvnw

# Resolve dependencies (this layer will be cached if pom.xml doesn't change)
RUN ./mvnw dependency:go-offline

# Copy the source code
COPY src ./src

# Build the application
RUN ./mvnw clean package -DskipTests

# Expose the port
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "target/FoodRegisterANDLogin-0.0.1-SNAPSHOT.jar"]
