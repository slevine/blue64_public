var store = [{
        "title": "How to SSH without using a Password",
        "excerpt":"The basis of using ssh without typing your password is public key based authentication. You need to generate a pair of public/private keys for this. Firstly, generate your public/private keys using ssh-keygen % ssh-keygen -t rsaYou must use the -t option to specify that you are producing keys for SSH...","categories": [],
        "tags": ["Howto","Linux","Mac"],
        "url": "http://localhost:4000/2004/12/how-to-ssh-without-using-a-password/"
      },{
        "title": "Method Synchronization",
        "excerpt":"In Java, access to shared resources can be controlled by usingsynchronized methods. An instance method is declared to be asynchronized method by adding the modifier synchronized to itsdeclaration. For example: public class Foo { synchronized void bar() { ... }}The meaning is that onlyone synchronized method can be active in...","categories": [],
        "tags": ["Development","Java"],
        "url": "http://localhost:4000/2005/06/method-synchronization/"
      },{
        "title": "Hashcodes in Java",
        "excerpt":"What happens if two different object hash to the same hashcode andthen are placed in a HashMap? If two keys hash to the same hashCode, or to the same hashCodemodulo the size of the table, all still works. It just takes alittle longer to look up that key, since get()...","categories": [],
        "tags": ["Development","Java"],
        "url": "http://localhost:4000/2005/07/hashcodes-in-java/"
      },{
        "title": "Static Method Synchronization",
        "excerpt":"What happens when you try to synchronize on a static method? When astatic synchronized method is called, which object are we referringto? A static method does not have a notion of a this reference.It is not possible to obtain a lock on an object that does notexist. How does it...","categories": [],
        "tags": ["Development","Java"],
        "url": "http://localhost:4000/2005/07/static-method-synchronization/"
      },{
        "title": "Handy OS X Application for Blogging",
        "excerpt":"After listening to the Maccast, I heard Adam mention this programcalled MarsEdit developedby Ranchero Software. He said that it was a great program that heuses quite often. So, of course, I had to give it a try. Idownloaded the trial version, and within the first 10 minutes, Isaw the value...","categories": [],
        "tags": ["Mac","Meta"],
        "url": "http://localhost:4000/2006/02/handy-os-x-application-for-blogging/"
      },{
        "title": "Configuring a Java Development Environment on OS X Tiger",
        "excerpt":"Since I just received my new MacBook Pro, I am tasked with settingup my development environment. Since most of my development isJava/Java EE based, the first thing I need to do is decide on thefile system layout for all of the Java artifacts. I.e., JDK, IDE’s,Open Source Packages, App Servers,...","categories": [],
        "tags": ["Development","Howto","Mac"],
        "url": "http://localhost:4000/2006/02/configuring-a-java-development-environment-on-os-x-tiger/"
      },{
        "title": "Directory size from the cmd line",
        "excerpt":"Have you ever wanted to scan recursively through a directory tofind out how much space each sub directory was taking up? Well,there is an easy way of doing this on *nix. Just run du “DiskUsage”. On a Darwin (OS X) based distro you can run: du -hd1 which tellsdu to...","categories": [],
        "tags": ["Howto","Linux","Mac"],
        "url": "http://localhost:4000/2006/02/directory-size-from-the-cmd-line/"
      },{
        "title": "Connecting to a corporate network with a Mac",
        "excerpt":"Today was my first day at work with the new MacBook. Going in totoday, I had several concerns on my mind, but after a little bit ofwork, and some patience, I was able to connect to all of theessential corporate resources. Here is a break down of the concernsI faced...","categories": [],
        "tags": ["Howto","Mac"],
        "url": "http://localhost:4000/2006/02/connecting-to-a-corporate-network-with-a-mac/"
      },{
        "title": "Moving From Eclipse to Intellij on the Mac",
        "excerpt":"I have been using Eclipse for the past 5 years. During thattime, there have been projects where I have been exposed toIntellij. Recently, after a conversation with a colleague,they convinced me to give the latest and greatest Intellij atry. They bragged about the wonderful Spring integration andcode inspection. So I...","categories": [],
        "tags": ["Development","Howto","Java"],
        "url": "http://localhost:4000/2007/11/moving-from-eclipse-to-intellij-on-the-mac/"
      },{
        "title": "Using Firefox 2.x Extentions with Firefox 3 Beta",
        "excerpt":"If you are like me, and you like to use the latest and greatestsoftware regardless of whether they are GA or not. Then youprobably ran across this problem too. After migrating to Firefox 3Beta, I found that many of the Firefox 2.x plug-ins did not work. Ididn’t know this for...","categories": [],
        "tags": ["Howto","Firefox","Mac"],
        "url": "http://localhost:4000/2008/05/using-firefox-2x-extentions-with-firefox-3-beta/"
      },{
        "title": "Groovy 1.6 Beta",
        "excerpt":"I installed the latest Groovy Beta, (1.6) and no doubt it feelsquite faster. Everything looks good from a performance perspective. I have run in to some strange behavior dealing with namedparameters. Let me illustrate the loophole I am describing withsome sample code. Lets take this simple Stock Groovy Bean: class...","categories": [],
        "tags": ["Development","Groovy"],
        "url": "http://localhost:4000/2008/05/groovy-16-beta/"
      },{
        "title": "Java One Keynote",
        "excerpt":"Here is a list of the main topics of discussion during the Java OneKeynote Address: Java + You All about you, and the services you want. They want a simple, intuitive, and compelling experience. Consumers drive innovation. (Travel, Shopping, Banking) Simple, intuitive, and compelling environment. The experience has to be...","categories": [],
        "tags": ["Development","Java"],
        "url": "http://localhost:4000/2008/05/java-one-keynote/"
      },{
        "title": "Initial Thoughts After Java One",
        "excerpt":"Well folks, another year, another Java One has passed. Thisconference has definitely got me thinking about a lot of things,especially the future of Java “The programming language”. You mustbe thinking, why in the world did I add that little blurb about“The programming language”, I mean, Java is nothing but aprogramming...","categories": [],
        "tags": ["Development","Java","JavaOne"],
        "url": "http://localhost:4000/2008/05/initial-thoughts-after-java-one/"
      },{
        "title": "A Few Site Improvement",
        "excerpt":"In case you haven’t noticed, this site is finally looking a bitmore, dare I say, “professional”. All it took was a little bit oftime, and some minor *nix commands. Since this site is based onthe latest version of Wordpress (2.5.1) ,it provides a lot of usefulness out of the box...","categories": [],
        "tags": ["Technology","Meta"],
        "url": "http://localhost:4000/2008/05/a-few-site-improvement/"
      },{
        "title": "Java One Wrap Up",
        "excerpt":"The purpose of this post is to wrap up my thoughts on this pastJava One Conference. There are both positive and not so positivethoughts in my mind right now about the conference. Rather thanmerely stating this fact, let me describe the details to you. I know it sounds like a...","categories": [],
        "tags": ["Conference","Development","Java"],
        "url": "http://localhost:4000/2008/05/java-one-wrap-up/"
      },{
        "title": "Amazon's EC2 and You",
        "excerpt":"The purpose of this post is to give you a “high” level overview ofAmazon’s EC2 (Elastic Compute Cloud),and how you can benefit from it.  Amazon defines the EC2 as A web service that provides resizable compute capacity in thecloud. It is designed to make web-scale computing easier fordevelopers. From a...","categories": [],
        "tags": ["Development","Technology"],
        "url": "http://localhost:4000/2008/06/amazons-ec2-and-you/"
      },{
        "title": "Proposed Java 7 Feature: Multi-Catch Statements",
        "excerpt":"How many times have you written code where you have something alongthe lines of: try { do something interesting ... } catch (X1 e1) { close(); } catch (X2 e2) { close(); } catch (X3 e3) { cleanup();}It is cumbersome to have to catch X1 and X2 separately even thoughthey...","categories": [],
        "tags": ["Development","Java"],
        "url": "http://localhost:4000/2008/06/java-78-cool-feature/"
      },{
        "title": "Proposed Java 7 Feature: Safe Rethrow",
        "excerpt":"How many times have you written the following code: void someMethod() throws X1,X2 { try { /* Something that can throw X1,X2 */ } catch (Throwable e) { logger.log(e); throw e; // Error: Unreported exception Throwable }}Need a way to express we are simply re-throwing the Exception thatwas caught. The...","categories": [],
        "tags": ["Development","Java"],
        "url": "http://localhost:4000/2008/06/proposed-java-7-feature-safe-rethrow/"
      },{
        "title": "Giving WebKit A Try",
        "excerpt":"Just changed my default browser from Firefox toWebkit on Leopard (OS X 10.5.3). The mainreason was because ofthe announcementof WebKits migration to the SquirrelFishJavascript interpreter. They claim that it is 1.6x’s fasterthan the previous WebKit interpreter and if its true, that ispretty good considering most of my daily work flow is based aroundweb...","categories": [],
        "tags": ["WebKit","Mac"],
        "url": "http://localhost:4000/2008/06/giving-webkit-a-try/"
      },{
        "title": "WebKit Day 2 - Benchmarks",
        "excerpt":"After using WebKit for the past few days it is evident to me thatit performs better than Firefox on my Macs. The question is howmuch better? Is it possible to quantify the performance difference?After searching aroundfound thisJavaScript benchmarking site. Details The data was obtained by runningthe SunSpider JavaScript Benchmark. The benchmark was...","categories": [],
        "tags": ["WebKit","Mac"],
        "url": "http://localhost:4000/2008/06/webkit-day-2-benchmarksas/"
      },{
        "title": "Upgraded Site To WordPress 2.6",
        "excerpt":"It took all of 15 minutes, and that included upgrading TinyMCE toversion 3.1 as well. WordPress is one ofmy favorite open source packages. Recently they have out done even them selves with the introductionof WordPress for iPhone. Afterusing it for a while it is clear that it is a really...","categories": [],
        "tags": ["Technology","Meta"],
        "url": "http://localhost:4000/2008/08/upgraded-site-to-wordpress-26/"
      },{
        "title": "WebKit Day 2.5 Benchmarks",
        "excerpt":"The recent release of Google Chrome Betafor Windows has re-stirred the good old browser wars. Chrome isbased on WebKit, but uses theV8 Javascript Engine Currently Chrome isa Windows only browser, so it is not possible for me to benchmarkthe browser first hand, but the claims have been that it is...","categories": [],
        "tags": ["WebKit","Mac"],
        "url": "http://localhost:4000/2008/09/webkit-day-25-benchmarks/"
      },{
        "title": "A little Salt with that Hash?",
        "excerpt":"Was just presented with a unique (to me) requirement which is toimplement a single sign on across multiple domains within the samepage via a cookie. Huh? Let me elaborate, in simple terms it meansthat there is a base site, lets call it foo.com, and then there isa partner site, lets...","categories": [],
        "tags": ["Development","Java"],
        "url": "http://localhost:4000/2008/10/a-little-salt-with-that-hash/"
      },{
        "title": "Simple Security for HTTP Based RESTful Services (Part 1)",
        "excerpt":"This is going to be the first in a series of posts discussingpotential ways of securing bi-directional RESTful based HTTPservices. For this series we are going to make the requirementsquite simple, namely, “secure” simply means the caller of theservice is authorized to invoke it. Lets assume that this solutionis being...","categories": [],
        "tags": ["Development","Java","REST"],
        "url": "http://localhost:4000/2008/11/simple-security-for-http-based-restful-services-part-1/"
      },{
        "title": "Simple Security for HTTP Based RESTful Services (Part 2)",
        "excerpt":"In part oneof this series, we examined one potential solution that turned outto be not so good. In this post lets try to find a solution usingthe same design, but a better implementation. To recap, we decided to use the simplest solution which is to add a security hash toeach...","categories": [],
        "tags": ["Development","Java","REST"],
        "url": "http://localhost:4000/2008/12/simple-security-for-http-based-restful-services-part-2/"
      },{
        "title": "Keyboard Shortcuts",
        "excerpt":"Do you want to learn all of the keyboard shortcuts to your favoriteJava IDE, but just don’t have time to study a cheat sheet? Are youenvious of your team lead because when you peer program with them,they are able to get things done without using the mouse? You ask your...","categories": [],
        "tags": ["Development","Howto","Java"],
        "url": "http://localhost:4000/2008/12/keyboard-shortcuts/"
      },{
        "title": "New Webkit Feature",
        "excerpt":"Just noticed a new and important feature released with the latestnighty build of Webkit, namely, an option to check for updatesautomatically. Mozilla has had this feature in their browsers for along time, and it was hard not having it available inWebkit. Just got used to downloading anew version every so...","categories": [],
        "tags": ["WebKit","Mac"],
        "url": "http://localhost:4000/2009/01/new-webkit-feature/"
      },{
        "title": "Going Functional with Scala",
        "excerpt":"Lately it seems like functional programming has been the talk ofthe town, the new (old) paradigm that is making a comeback in amajor way. For a while, I resisted the urge to follow the paradigmde jour, being the hard core OO guy that I am, but now it is clearto...","categories": [],
        "tags": ["Development","Functional","Java","Scala"],
        "url": "http://localhost:4000/2009/01/going-functional-with-scala/"
      },{
        "title": "Quicksilver is a timesaver",
        "excerpt":"It has been a while since a single program changed my workflow asmuch as Quicksilver has. Over the years, it has been covered a lot on the Mac sites,but it never really seemed like something that would help me. Guessit was the stubborn side of me refusing to try something...","categories": [],
        "tags": ["Howto","Mac"],
        "url": "http://localhost:4000/2009/01/quicksilver-is-a-timesaver/"
      },{
        "title": "Easy Upgrades",
        "excerpt":"Who doesn’t like easy upgrades? Easy upgrades are great whenimplemented correctly. There are two speciifiic easy upgrades Ihave been (enjoying) using recently, namely, Wordpress and UbuntuServer. Wordpress This blog has been powered by Wordpress for a longtime, and has been upgraded many times along the way. Download thelatest tgz file,...","categories": [],
        "tags": ["Howto","Linux"],
        "url": "http://localhost:4000/2009/06/easy-upgrades/"
      },{
        "title": "iPhone 3.0 upgrade from beta 5 to final",
        "excerpt":"For the past few months, I have been running the iPhone OS 3.0betas on my iPhone without too many issues. Thus I assumed thatwhen the final version of OS 3 was released, it would be easy toupgrade to it. This has not been the case. The current beta on myiPhone...","categories": [],
        "tags": ["iPhone","Mac"],
        "url": "http://localhost:4000/2009/06/iphone-3-0-upgrade-from-beta-5-to-final/"
      },{
        "title": "Simple Applescript For The Traveling Mac",
        "excerpt":"The Problem You have a MacBook and a nice Apple Cinema display(this doesn’t sound like a problem so far), and you travel with theMacBook every day. When you open the lid of your MacBook you liketo have the Dock on the left side of the screen giving you the mosttop...","categories": [],
        "tags": ["Howto","Howto","Mac"],
        "url": "http://localhost:4000/2009/11/simple-applescript-for-the-traveling-mac/"
      },{
        "title": "Scala reduceLeft",
        "excerpt":"This post was updated on November 19, 2009. As you know, during the past few weeks (time permitting), I have been spending time studying the Scala programming language. After reading the first few chapters of Programming In Scala, I have come across the first feature of Scala that would have...","categories": [],
        "tags": ["Development","Scala"],
        "url": "http://localhost:4000/2009/11/scala-reduceleft/"
      },{
        "title": "Scala Sugar - Lists",
        "excerpt":"If I want to become a real Scala Ninja, I am going to have change the way I think about coding. For the past 10 years I have been programming primarily using the object oriented paradigm. Although Scala supports pure object oriented programming, it is my desire to learn to...","categories": [],
        "tags": ["Development","Scala"],
        "url": "http://localhost:4000/2009/11/scala-sugar-lists/"
      },{
        "title": "Scala Sugar - Iteration",
        "excerpt":"In this second installment of Scala Sugar, lets put the lists that we created in the previous post to use. How do we typically interact with lists when writing non-trivial programs? We iterate over them! With that being said, lets explore how iteration in Scala compares with iteration in Java....","categories": [],
        "tags": ["Development","Scala"],
        "url": "http://localhost:4000/2009/11/scala-sugar-iteration/"
      },{
        "title": "Time Machine over a Network Drive",
        "excerpt":"This post describes the steps involved when setting up Time Machine to backup to a Network Drive. These steps are only required if you want to back up to a device other than a Time Capsule. It is pretty quick and easy, so without further due, lets get started. Step...","categories": [],
        "tags": ["Howto","Mac","Technology"],
        "url": "http://localhost:4000/2009/12/time-machine-over-a-network-drive/"
      },{
        "title": "With Grape, Groovy Is On Par with Native Scripting Languages",
        "excerpt":"If you haven’t heard, the latest version of Groovy was released this week and included with it, among many other great features, was Grape (Groovy Advanced Packaging Engine). Grape is an annotation based dependency management system that provides functionality similar to that of Maven and Ivy with one clear advantage,...","categories": [],
        "tags": ["Development","Groovy","Howto","Java"],
        "url": "http://localhost:4000/2009/12/with-grape-groovy-is-on-par-with-native-scripting-languages/"
      },{
        "title": "RubyMine 2 Debugging Issue Resolved",
        "excerpt":"If you are trying to debug Ruby code in RubyMine 2 IDE, but are having difficulties such as, the IDE freezes after you try to step in, step over, or step next and are wondering if your configuration is wrong? It is not, if you happen to have installed the...","categories": [],
        "tags": ["Development","Howto","Ruby"],
        "url": "http://localhost:4000/2010/01/rubymine-2-debugging-issue-resolved/"
      },{
        "title": "First Thoughts On My New Eee Pc (1005PE)",
        "excerpt":"So far, so good with my new Eee PC (1005PE) Netbook. The machine came pre-installed with Win 7 Starter edition, so the first task for me to do was to get rid of Windows 7 and install Ubuntu Netbook on it. So I downloaded the Ubuntu Netbook 10.04 daily build...","categories": [],
        "tags": ["Howto","Linux","Ubuntu"],
        "url": "http://localhost:4000/2010/03/first-thoughts-on-my-new-eee-pc-1005pe/"
      },{
        "title": "In case you haven't heard - Apple is not showing Java any more love...",
        "excerpt":"Official release notes. If you think about it it makes perfect sense for them. To them Java is no different than Flash, just a GUI platform. How many killer Java applications are there out there (besides Java IDE’s) ? Add to the fact that SunOracle is probably twisting their arm...","categories": [],
        "tags": ["Development","Java","Mac"],
        "url": "http://localhost:4000/2010/10/in-case-you-havent-heard-apple-is-not-showing-java-any-more-love/"
      },{
        "title": "Mission Accomplished, Migration From Wordpress to Octopress Complete!",
        "excerpt":"Someone told me about the Octopress blog engine last week, which is a blog engine based on Jekyll, the engine that powers sites such as GitHub Pages. The main difference between Octopress and plain vanilla Jekyll is with Jekyll, you have to write your own Templates, Styles, and Javacscript code,...","categories": [],
        "tags": ["Meta","Development"],
        "url": "http://localhost:4000/2011/09/migration-from-wordpress-to-octopress-complete/"
      },{
        "title": "WebView(Javascript) -> Native Android API",
        "excerpt":"For a few weeks towards the end of last year I was developing an Android application. During that time I discovered a few new (to me) things about the Android platform. One in particular that caught my attention was having Javascript code running locally on the device call a native...","categories": [],
        "tags": ["Android","Scala","Javascript","Development"],
        "url": "http://localhost:4000/2012/03/webview-javascript-native-android/"
      },{
        "title": "On Deciding Between PUT and POST When Creating a RESTful Resource",
        "excerpt":"The goal of this post is to try to help you figure out which HTTP verb: PUT or POST is more appropriate to use when adding and updating resources. Before we can get in to the details of which HTTP verb to use when, we first need to understand the...","categories": ["posts"],
        "tags": ["Development","REST"],
        "url": "http://localhost:4000/2013/10/on-deciding-between-put-and-post-when-creating-a-restful-resource/"
      },{
        "title": "Notes from a Talk on Evolving Java",
        "excerpt":"Recently I attended a talk given by Brian Goetz, about evolving Java. It was refreshing to hear that Java is moving forward again from the Java Language architect himself. Like others, I have mixed feeling about how some of the features were added to the language, but overall, after hearing...","categories": [],
        "tags": ["Development","Functional","Java","Scala"],
        "url": "http://localhost:4000/2013/12/notes-from-a-talk-on-evolving-java/"
      },{
        "title": "The Power of Big Query with Public Data",
        "excerpt":"TLDR - If you are looking for an easy way to query a public dataset, you should definitely check out Big Query’s publicly available datasets, and chances are you will find the dataset you are looking for. Background Late one Sunday afternoon, I found myself browsing around a few high...","categories": [],
        "tags": ["GCP","BigQuery","BigData"],
        "url": "http://localhost:4000/2018/02/the-power-of-bq/"
      },{
        "title": "Querying External Data with BigQuery",
        "excerpt":"TLDR - In this post I will walk through how to use BigQuery’s new capability of querying Hive Partitioned Parquet files in GCS. It is a really cool feature. Some Background I have a huge interest in Data Lakes, especially when it comes to the query engines that are capable...","categories": [],
        "tags": ["GCP","BigQuery","Spark","BigData"],
        "url": "http://localhost:4000/2019/11/querying-externally-partitioned-data-with-bq/"
      },{
        "title": "BigQuery Integer Partitioning is in Beta",
        "excerpt":"TLDR - It is now possible to create integer partitioned tables in BigQuery. This post will talk about what that means, how to leverage it, and finally walk through a few scenarios demonstrating the benefits of it. If you weren’t paying close attention to the latest GCP announcements, you may...","categories": [],
        "tags": ["GCP","BigQuery","BigData"],
        "url": "http://localhost:4000/2019/12/bq-integer-range-partitioning-is-now-beta/"
      },{
        "title": "First Impressions of the M1 MacBook Pro",
        "excerpt":"TLDR - I really like this machine, it is portable, fast, quiet, and comfortable to work on for hours at a time. When I read about Apple’s announcement of the new M1 MacBook Pro featuring the Apple M1 Chip, I must admit, it made me a bit excited about Macs...","categories": [],
        "tags": ["Mac"],
        "url": "http://localhost:4000/2020/12/first-impressions-of-the-new-mac-m1-macbook/"
      }]
