# Tina - AI Car Insurance Recommendation Assistant Backend

Tina is an AI-powered assistant designed to enhance the car insurance buying experience. It interacts with Google's Gemini 2.0 Flash to provide users with personalized car insurance policy recommendations based on their specific needs. This backend handles the API calls to Gemini 2.0 Flash and relays the responses to the frontend.

## Technologies Used

- Node.js
- Docker

## Setup and Installation

1.    **Prerequisites:**

      - Node.js (LTS version recommended)
      - Docker (if you plan to use Docker for deployment)
      - Google Cloud Platform (GCP) account with Gemini API access and proper credentials.

2.    **Installation:**

      - Clone the repository:
           ```bash
           git clone https://github.com/DeanJB/Mission4LVL5Backend.git
           cd Mission4LVL5Backend
           ```
      - Install dependencies:
           ```bash
           npm install, cors, express, .env
           ```
      - Create a `.env` file in the root directory and add your environment variables (see Environment Variables section).

3.    **Environment Variables:**

      - `GEMINI_API_KEY`: Your Google Cloud Platform API key for accessing the Gemini 2.0 Flash API.
      - Other environment variables specific to your implementation (e.g., port number, database connection strings if applicable in the future).

4.    **Running the Backend:**
      - To start the server:
           ```bash
           npm start
           ```
      - If you're using Docker:
           - Build the Docker image:
                ```bash
                docker build -t tina-backend .
                ```
           - Run the Docker container:
                ```bash
                docker run -p 4000:4000
                ```

## Usage

- **API Endpoints:**
     - `POST /insurance`:
          - This endpoint receives user input from the frontend, sends it to the Gemini 2.0 Flash API, and returns a response & athe the end of the conversation the AI-generates a insurance policy recommendation.
          - Example Request (JSON):
               ```json
               {
                     "userInput": "I need a car insurance policy that covers theft and collision."
               }
               ```
          - Example Response (JSON):
               ```json
               {
                     "recommendation": "Based on your needs, a comprehensive policy covering theft and collision is recommended. Here's a sample policy: [AI Generated Policy]"
               }
               ```
- **Authentication and Authorization:**
     - Currently, there is no implemented authentication or authorization. Implement as needed.

## Deployment

- **Docker Deployment:**
     - The provided Dockerfile allows for easy deployment to containerized environments like Docker Hub, AWS ECS, or Google Cloud Run.
- **Environment Considerations:**
     - Ensure that your deployment environment has access to the Google Cloud Platform API and that your API key is securely stored as an environment variable.

## Contributing

- Contributions are welcome! Please follow these guidelines:
     - Fork the repository.
     - Create a new branch for your feature or bug fix.
     - Submit a pull request with a clear description of your changes.
- Code style: Follow standard Node.js coding conventions.
