---
layout: post
date: 2021-12-19 12:36
title: "[Master thesis] A Framework to Accelerate CNN-based Deblurring for HEVC reconstructed Video "
description: SpeedDeblur.
comments: false
category: 
- portfolio
tags:
- IEEE MMSP 2021
---
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<p style="color: #02577a;"><i class="fa fa-globe"></i> <b><a target="_blank" style="color:#02577a" href="https://www.hosei.ac.jp/media/">Research Center for Computing and Multimedia Studies, Hosei University, Japan</a></b></p>

<p style="text-align: justify; color:black">

This paper proposes a speedup convolutional neural network (CNN)-based deblurring framework (SpeedDeblur) for reconstructed blurry videos. First, we extract the coding information and the reconstructed video from the compressed data. Second, a CNN-based algorithm is used for deblurring the first reconstructed frame. <!--more--> Pixels of the deblurred frames are transferred to the subsequent frames guided by HEVC decoded data.The transferring process is simple and faster than applying a deblurring algorithm on all frames. However, passing pixels throughout a long video propagates accumulated errors and reduces the deblurring performance. To bridge this gap, we design an adaptive reset strategy for deciding which frame needs CNN-based deblur during the transfering process. Besides, a data generation strategy simulating blurry real-world factors such as camera shake and fast movement is proposed. Compared to frame-by-frame deblurring approaches, our framework can retain the same comparable results and boost the deblurring processing by up to 4.0 <i>times</i> and 99.4 <i>times</i> on GPU and CPU, respectively.
<!--more--> 

</p>
<p style="color:black">
<b>Techniques </b>: 
<br>
Emotion Detection,
Face Recognition,
Face Re-identification,
Eyegaze Tracking,
<br>
<b>Languages and frameworks </b>:
<br> 
Python,
Flask,
Sqlite3,
OpenCV,
Tensorflow,
HTML/CSS,
Javascript/AJAX,
Plotly
</p>
<b style="color:black"> <i class="fa fa-file-video-o"></i>  DEMO VIDEO </b> 
<iframe src="https://www.youtube.com/watch?v=ordc2U9Qoxs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<b style="color:black"><i class="fa fa-picture-o"></i>  DEMO GALLERY</b>
<!-- Container for the image gallery -->
<div class="container">

  <!-- Full-width images with number text -->
  <div class="mySlides">
    <div class="numbertext">1 / 7</div>
      <img src="/assets/images/moemo_imgs/dashboard.png" style="width:100%">
  </div>
  <div class="mySlides">
    <div class="numbertext">2 / 7</div>
      <img src="/assets/images/moemo_imgs/overview_visualization.png" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">3 / 7</div>
      <img src="/assets/images/moemo_imgs/student_visualization_1.png" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">4 / 7</div>
      <img src="/assets/images/moemo_imgs/student_visualization_2.png" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">5 / 7</div>
      <img src="/assets/images/moemo_imgs/video_demos_1.png" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">6 / 7</div>
      <img src="/assets/images/moemo_imgs/video_demos_2.png" style="width:100%">
  </div>
    <div class="mySlides">
    <div class="numbertext">7 / 7</div>
      <img src="/assets/images/moemo_imgs/video_demos_3.png" style="width:100%">
  </div>

  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>

  <!-- Image text -->
  <div class="caption-container">
    <p id="caption"></p>
  </div>

  <!-- Thumbnail images -->
  <div class="row">
    <div class="column">
      <img class="demo cursor" src="/assets/images/moemo_imgs/dashboard.png" style="width:100%" 
      onclick="currentSlide(1)" alt="MOEMO Dashboard - Process video in real-time and visualize the analytic results for lecturers">
    </div>
    <div class="column">
      <img class="demo cursor" src="/assets/images/moemo_imgs/overview_visualization.png" style="width:100%" onclick="currentSlide(2)" alt="Summary Analytic Visualization - Generate analysis report after processing video">
    </div>
    <div class="column">
      <img class="demo cursor" src="/assets/images/moemo_imgs/student_visualization_1.png" style="width:100%" onclick="currentSlide(3)" alt="Student Analytic Visualization - Analyze student engagement, concentration and emotion in time-series">
    </div>
    <div class="column">
      <img class="demo cursor" src="/assets/images/moemo_imgs/student_visualization_2.png" style="width:100%" onclick="currentSlide(4)" alt="Student Analytic Visualization - Analyze student engagement, concentration and emotion in time-series">
    </div>
    <div class="column">
      <img class="demo cursor" src="/assets/images/moemo_imgs/video_demos_1.png" style="width:100%" 
      onclick="currentSlide(5)" alt="Analytic Video - Extract emotion, eyegaze features from students">
    </div>
    <div class="column">
      <img class="demo cursor" src="/assets/images/moemo_imgs/video_demos_2.png" style="width:100%" 
      onclick="currentSlide(6)" alt="Analytic Video - Extract emotion, eyegaze features from students">
    </div>
    <div class="column">
      <img class="demo cursor" src="/assets/images/moemo_imgs/video_demos_3.png" style="width:100%" 
      onclick="currentSlide(7)" alt="Analytic Video - Extract emotion, eyegaze features from students">
    </div>
  </div>
</div>