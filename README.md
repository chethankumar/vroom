# Vroom App 

## Overview
Vroom is a local bike/scooter rental app that lets you book your two wheeler on availabilty and lets you choose the desired time based on the availablity. This app uses the IBM App Launch Service that helps you control your application features. It demoes the following feaure of App Launch Service :
- A Test drive Engagement which lets you enable the test drive feature in your app.
- A Theme Change Engagement which lets you change the theme of your app for a selected audience.


### Concept 1 - Remote App Customisation
A most common use case is where an app developer would want to change app background, a button text or certain widget placement in the app once after the app is published to the Appstore. Another Appstore publish might be an overkill, hence developers would prefer an over-the-air update. This gives developers a much-needed flexibility to manipulate app behavior.

Let's say you would like a button that pop's up a Poll question with yes-no buttons. In the App Launch service Console you will configure this app attributes and later in your app, you will use the SDK APIs.

 - **Feature** - A feature is equivalent to a Java class where you define class members. 
	 - Let's call this feature - **AskPoll**
	 - Define properties in this feature
		 - property 1 - popUpText
		 - property 2 - popUpYes
		 - property 3 - popUpNo
 - **Audience** - An audience is a collection of attributes that define the characteristics of an audience segment. Let's say you'd like to group all 'Gold' customers, then you will define an Audience, called GoldCustomers with an attribute in it, called GoldAudienceSegment with a value set to 'Gold'. Later during the app development you will initialize your app by setting an attribute with {'GoldAudienceSegment':'Gold'}. This initialization will cluster that app (the device) into a 'Gold' audience. 
	 - Let's define an audience called, **PopUpSegment** 
	 - Set its value to 'AllPopupUsers'
 - **Engagement** - An engagement is an instantiation of a Feature with properties initialized and attaching one of the pre-defined audiences. For our AskPoll feature, we will,
	 - Create an Engagement, called - **AskPollEngagement**
		 - Initialize AskPoll feature with,
			 - popUpText = "Feeling good?"
			 - popUpYes = "Absolutely"
			 - popUpNo = "Nah"
		 - Initialize Audience,
			 - Audience="PopUpSegment"

Once the above is defined in the Console, in your code you will initialize the service and call the registration API passing in,
 ```
 {"PopUpSegment":"AllPopupUsers"}
 ```
 The app can now be coded to utilize these Feature parameters to set the Poll question and the two button's label. That's it - the app will load the Feature parameters during app initialization. If the text is updated then the updated is text is fetched during the next app initialization.
 
### Concept 2 - Remote Feature Toggle
This is one of the most often asked feature and the easiest to accomplish using the App Launch Service. 
 
 - **Feature** - No change
 - **Audience** - No change
 - **Engagement** - In the App Launch Service Console if the engagement, "AskPollEngagement" is paused then the logic to check for the feature fails and the button, Take Poll will never be displayed. Resume it, then the button is displayed.
 
In your code surround the app logic to check if a feature is defined. For example, to display the 'Take Poll' button surround the display logic with a check for the feature, called 'AskPoll'.


### Concept 3 - Vary App Customisation by percentage of Users

Often Developers would want to create multiple variants of Feature properties and apply them to a different percentage of users. For example, in the Poll example, fifty percentage of users should see one variation of the poll question and the remaining fifty should see variation of the same question. The idea is to perform an A/B test on users to arrive at the more suitable question.

 - **Feature** - No change
 - **Audience** - No change
 - **Engagement** - Engagement allows you to create multiple Feature instances (variations) by setting a percentage for each instance. For example,
	 - Variant 1 (50%)
		 - popUpText - “Is the new feature making a difference?”
		 - popUpYes  - “Yes”
		 - popUpNo - “No”
	 - Variant 2 (50%)
		 - popUpText - “How do you like the new feature?”
		 - popUpYes  - “Great”
		 - popUpNo - “Not Really”
 - Code - No change in the code since the App Launch Service handles the audience segmentation.

### Concept 4 - App Customisation by audiences
This is perhaps the most advanced and the most powerful feature that App Launch Service supports. Take Poll feature, for example, if you would like to create two audiences, Android users and iOS users and tailor app customisation for each audience then user experience can be customised for different devices.

 - **Feature** - No change
 - **Audience** - Earlier we had a single audience, called PopUpSegment. We will change this to include two separate audiences, AndroidPopupSegment and iOSPopupSegment.
	 - 	Let's define an audience called, **AndroidPopupSegment** 
	 - Set its value to 'AllPopupUsers'
	 - 	Let's define another audience called, **iOSPopupSegment** 
	 - Set its value to 'AllPopupUsers'
 - Engagement - As defined in Concept 1 an engagement instantiates a feature by setting values. In this case, we will define two engagements.
	 - Create an Engagement, called - **AndroidAskPollEngagement**
		 - Initialize AskPoll feature with,
			 - popUpText = "How are you feeling today?"
			 - popUpYes = "Absolutely"
			 - popUpNo = "Nah"
		 - Initialize Audience,
			 - Audience="**AndroidPopupSegment**"
	 - Create a second engagement, called **iOSAskPollEngagement**
		 - Initialize AskPoll feature with,
			 - popUpText = "Feeling good today?"
			 - popUpYes = "Yes"
			 - popUpNo = "No"
		 - Initialize Audience,
			 - Audience="**iOSPopupSegment**"
Note - you may create variants within each engagement, for example, within AndroidAskPollEngagement you may apply **Concept 3**.

### Metrics
A hidden gem inside App Launch Service is collecting metrics. App Launch Service allows extensive support to embed metric collection hooks, across all the above four concepts. These metrics will help you evaluate results of A/B testing, Feature performance, etc.

Next step, read App Launch documentation here and try out one of the samples here.

## License

MIT © [IBM Mobile](mailto:ibmmobile@ibm.com)
