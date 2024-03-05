# Elderly-Pepper
we present a solution of older adults' experiences with Pepper humanoid robot. The proposed solution is modular and relies on the proper integration of existing Pepper functionalities. Our research presents the Pepper robot to be able to recognize faces, communicate and interact with humans, navigation in dynamic environments.

# Team Members
Main Author: Austin Fu, Co-Author: Lincong Li


# SETUP 
INSTALLATION OF CHOREGRAPHE![pepper](https://github.com/AustinAllen/Elderly-Pepper/assets/7984036/28d8cf18-0852-4ce4-9146-e81c7005af70)

1. choregraphe software installation.
2. Import the 24116.pml file into the choregraphe

# ASR AND NLP SOLUTION
In order to make Pepper knowledgeable, we provide a comprehensive explanation of all the technical steps involved in developing the NewsGPT-based robot expert system. At the first stage, the user initiates an interaction with the Pepper robot by speaking a few words in the form of either a greeting or a question. Subsequently, the Automatic Speech Detector (ASD) system activates the speech recognition service, aiming to procure the transcription of the user's verbal utterance. This transcribed information is then relayed as a requestion to the AI agent housed on the cloud infrastructure of the proposed system, which operates using the GPT-3.5 model.

	 
![image](https://github.com/AustinAllen/Elderly-Pepper/assets/7984036/15e8b6ea-747d-47ac-bee2-b2113cd1dd52)

# Technical Infrastructure - SLAM![image](https://github.com/AustinAllen/Elderly-Pepper/assets/7984036/85c53294-4031-479d-8c14-6de7b2416211)
Robot Operating System (ROS) is a structured communications layer above host operating systems. It is designed to support the philosophy of modular, tool-based software development. ROS reuses code from numerous other open-source projects, such as hardware drivers, navigation system, and simulators. In each case, ROS is used only to expose various configuration options and to route data into and out of the respective software. Several hundred (or more) ROS packages exist across several publicly viewable repositories![image](https://github.com/AustinAllen/Elderly-Pepper/assets/7984036/fb79c7dc-7819-45ee-a017-a65dbdfee47f)
