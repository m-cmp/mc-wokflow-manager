# MC-Workflow-Manager**MC-Workflow-Manager** is one of the components of the [M-CMP](https://github.com/m-cmp/docs/tree/main) platform. With **MC-Workflow-Manager**, you can easily create and execute workflows, as well as modify and delete them as needed. For example, it allows you to create and manage multi-cloud infrastructures and seamlessly deploy applications across multiple clouds.## Features- Workflow creation and execution- Workflow Stage management- Workflow management---## Table of Contents1. [System Requirements](#system-requirements)2. [Installation with Docker Compose](#installation-with-docker-compose)3. [Project Structure](#project-structure)4. [Run Instructions](#run-instructions)5. [Contributing](#contributing)6. [License](#license)---## System RequirementsTo use **mc-workflow-manager**, ensure your system meets the following requirements:- **Operating System**: Linux (Ubuntu 22.04 LTS recommended)- **Java**: OpenJDK 17+- **Gradle**: v7.6+- **Docker**: v24.0.2+- **WorkflowEngine(Jenkins)**: v2.424+- **Git**: Latest version---## Installation with Docker ComposeThe easiest way to deploy **mc-workflow-manager** is via Docker Compose. Follow the steps below to get started.### Step 1: Clone the RepositoryFirst, clone the `mc-workflow-manager` repository to your local machine:```bashgit clone https://github.com/m-cmp/mc-workflow-manager.gitcd mc-workflow-manager```### Step 2: Configure Environment VariablesYou can customize the following environment variables in the docker-compose.yaml file:### Workflow Engine- JENKINS_USERNAME: Workflow-engine User Name- JENKINS_PASSWORD: Workflow-engine User Password### MC-Workflow-Manager- DB_INIT_YN: Database initialization (create, update, create-drop, none ....)- DB_ID: Database user ID- DB_PW: Database user password- Edit these environment variables according to your needs.### Step 3: Install and Run Docker ComposeTo bring up the mc-workflow-manager service along with its dependencies, run the following command:```bashsudo apt updatesudo apt install -y docker-composecd ./scriptchmod +x setup-docker-no-sudo.sh./setup-docker-no-sudo.shcd ..# The initial user information for the workflow engine is admin / 123456# If you need to modify, modify docker-compose.yamlsudo docker-compose up -d```This command will pull the necessary Docker images, build the services, and start the containers in detached mode.### Step 4: Access the ApplicationOnce the services are up, you can access the following endpoints:- Swagger UI: http://<Public_IP>:18083/swagger-ui/index.html- WorkflowEngine(Jenkins) UI: http://<Public_IP>:9800- Workflow Manager Core :  - http://<Public_IP>:18083- Workflow Manager UI:  - OSS Management: http://<Public_IP>:18083/web/oss/list  - Workflow Stage Management: http://<Public_IP>:18083/web/workflowStage/list  - Workflow Management: http://<Public_IP>:18083/web/workflow/list  - Event Listener Management: http://<Public_IP>:18083/web/eventListener/list### Step 4-1: Certainly! Here’s the translated list of settings:1. Access the OSS List2. Modify previously registered OSS3. Update with Workflow Engine information4. Check for duplicates and verify connections5. Click the "Edit" button※ If no separate modifications were made, the Workflow Engine (Jenkins) information is as follows.1. Workflow Engine - Jenkins> URL : http://<Public_IP>:9800> > OSS ID : admin> > OSS PW : 123456### Step 5: Stop ServicesTo stop the running services, use:```bashsudo docker-compose down```This will gracefully shut down the containers without removing volumes, allowing you to preserve the state of the database.---## Project Structure```bashmc-workflow-manager/├── docker-compose.yaml       # Docker Compose file for service orchestration├── src/                      # Source code for the Workflow Manager├── script/                   # Helper scripts for build and execution├── README.md                 # Project documentation├── LICENSE                   # License information└── docs/                     # Additional documentation```---## Run Instructions### Manual Build and RunIf you prefer to build and run the project manually, follow these steps:- Install Git  ```bash  sudo apt update  sudo apt install -y git  ```- Download mc-workflow-manager Source Code  ```bash  cd $HOME  git clone https://github.com/m-cmp/mc-workflow-manager.git  export PROJECT_ROOT=$(pwd)/mc-workflow-manager  ```- Install Required Packages/Tools and Set Environment Variables  - Install Java, Docker    ```bash    cd $PROJECT_ROOT/script    sudo chmod +x *.sh    . $PROJECT_ROOT/script/init-install.sh    ```  - Set Environment Variables    ```bash    cd $PROJECT_ROOT/script    . $PROJECT_ROOT/script/set_env.sh    source $HOME/.bashrc    ```- Build and Run  - Execute Shell Script    ```bash    # Run Jenkins    . $PROJECT_ROOT/script/run-jenkins.sh      # Build Springboot Project    . $PROJECT_ROOT/script/build-mc-workflow.sh      # Run Springboot Project    . $PROJECT_ROOT/script/run-mc-workflow.sh    ```---## ContributingWe welcome contributions to the **mc-workflow-manager** project! To get involved, follow these steps:1. Fork the repository on GitHub.2. Create a feature branch: ```git checkout -b feature-branch```.3. Commit your changes: ```git commit -m "Add new feature"```.4. Push the branch: ```git push origin feature-branch```.5. Open a Pull Request.6. For detailed guidelines, refer to the Contributing Guide.---## LicenseThis project is licensed under the terms of the Apache 2.0 License. See the LICENSE file for details.