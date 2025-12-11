pipeline {
    agent any

    stages {
        stage('Build Backend') {
            steps {
                dir('FoodRegisterANDLogin') {
                    // Use the Maven wrapper to build
                    sh 'chmod +x mvnw'
                    sh './mvnw clean package -DskipTests'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('foodapp') {
                    // Install dependencies and build
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
    }
}
