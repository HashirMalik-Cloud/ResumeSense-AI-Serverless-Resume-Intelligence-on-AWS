## 🏗️ Architecture Diagram

![Architecture Diagram](Architecture%20Diagram.png)

## 🎥 Video Walkthrough

[▶ Watch the full project video walkthrough](https://youtu.be/axOhQVjGW24?si=yyHmXixBq9kkPV-E)

---

# ResumeSense AI – Serverless Resume Intelligence on AWS

An AI-powered, serverless system that automatically processes resumes uploaded to the cloud and converts them into structured, actionable candidate insights using AWS and Generative AI.

This project demonstrates how modern cloud services can be combined to build a real-world AI pipeline without managing servers.

---

## 🧠 What This Project Does

1. A user uploads a resume (PDF or DOCX) to cloud storage  
2. An automated event triggers backend processing  
3. AI extracts structured information such as:
   - Name
   - Email
   - Phone
   - Skills
   - Experience
   - Professional summary
4. The processed result is stored and instantly visible on the frontend

---


## 🛠️ Tech Stack

- **Amazon S3** – Resume upload & static website hosting  
- **AWS Lambda** – Serverless resume processing  
- **Amazon EventBridge** – Event-driven automation  
- **Amazon Bedrock (Claude AI)** – Intelligent resume analysis  
- **HTML / CSS / JavaScript** – Frontend UI  

---


## 📸 UI Preview

![UI Demo](Screenshots/Results%20showing%20on%20frontend%201.png)

![Processed Output](Screenshots/Results%20showing%20on%20frontend%202.png)

---

## 🌟 Key Highlights

- Fully serverless (no EC2, no containers)
- Event-driven architecture
- Real AI integration using Amazon Bedrock
- Secure and scalable cloud design
- Portfolio-ready real-world use case

---

## 📌 Notes

This repository focuses on the **frontend, architecture, and system design**.  
Backend resources (Lambda, IAM, Bedrock) are deployed securely within AWS and are not included for safety reasons.

---

## 🙌 Author

**Hashir Malik**  
Cloud & AI Enthusiast | AWS Projects | Serverless Architectures  

If you like this project, feel free to ⭐ the repo!
