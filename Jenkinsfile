pipeline {
    agent any

    stages {
        stage('git repo and clean') {
            steps {
		bat "rmdir /s /q perfumeJs"
		bat "git clone https://github.com/shadmanakbar/perfumeJs.git"

            }


        }
    stage('install') {
            steps {
				bat "npm install"

            }


        }
            stage('start') {
                    steps {
        				bat "npm start"

                    }


                }

	}
}
