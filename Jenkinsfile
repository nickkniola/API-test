pipeline {
  agent any
  stages {
    stage('Git Checkout') {
      steps {
        git(url: 'https://github.com/nickkniola/API-test.git', branch: 'master')
        echo 'Checked out from Github'
      }
    }

    stage('Start') {
      steps {
        sh 'npm start'
      }
    }

    stage('Finished') {
      steps {
        echo 'Finished'
      }
    }

  }
}