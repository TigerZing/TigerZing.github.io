---
layout: post
date: 2021-12-19 12:36
title: "[Master thesis] SpeedDeblur - A Framework to Accelerate CNN-based Deblurring for HEVC reconstructed Video "
description: SpeedDeblur.
comments: false
category: 
- portfolio
tags:
- IEEE MMSP 2021
---
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<p style="color: #02577a;"><i class="fa fa-globe"></i> <b><a target="_blank" style="color:#02577a" href="https://www.hosei.ac.jp/media/">Research Center for Computing and Multimedia Studies, Hosei University, Japan</a></b></p>

<p style="color: #009f4d;"><i class="fa fa-trophy"></i> <b><a target="_blank" style="color:#009f4d" href="https://www.hosei.ac.jp/media/">Accepted and presented in IEEE 23nd International Workshop on Multimedia Signal Processing 2021 (IEEE MMSP2021)</a></b></p>


<p style="text-align: justify; color:black">

This paper proposes a speedup convolutional neural network (CNN)-based deblurring framework (SpeedDeblur) for reconstructed blurry videos. First, we extract the coding information and the reconstructed video from the compressed data. Second, a CNN-based algorithm is used for deblurring the first reconstructed frame. <!--more--> Pixels of the deblurred frames are transferred to the subsequent frames guided by HEVC decoded data.The transferring process is simple and faster than applying a deblurring algorithm on all frames. However, passing pixels throughout a long video propagates accumulated errors and reduces the deblurring performance. To bridge this gap, we design an adaptive reset strategy for deciding which frame needs CNN-based deblur during the transfering process. Besides, a data generation strategy simulating blurry real-world factors such as camera shake and fast movement is proposed. Compared to frame-by-frame deblurring approaches, our framework can retain the same comparable results and boost the deblurring processing by up to 4.0 <i>times</i> and 99.4 <i>times</i> on GPU and CPU, respectively.
<!--more--> 

</p>
<p style="color:black">
<b>Techniques </b>: 
<br>
Video Compression
Video Deblurring,
Frame Interpolation,
Convolutional Neural network
<br>
<b>Languages and frameworks </b>:
<br> 
Python,
MATLAB,
</p>
<b style="color:black"> <i class="fa fa-file-video-o"></i>  DEMO VIDEO </b> 
<iframe width="560" height="315" src="https://www.youtube.com/embed/ordc2U9Qoxs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<b style="color:black"><i class="fa fa-picture-o"></i>  PRESENTATION IMAGES</b>
<!-- Container for the image gallery -->
<div class="container">

  <!-- Full-width images with number text -->
  <div class="mySlides">
    <div class="numbertext">1 / 18</div>
      <img src="/assets/images/SpeedDeblur_presentation_imgs/0001.jpg" style="width:100%">
  </div>
  <div class="mySlides">
    <div class="numbertext">2 / 18</div>
      <img src="/assets/images/SpeedDeblur_presentation_imgs/0002.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">3 / 18</div>
      <img src="/assets/images/SpeedDeblur_presentation_imgs/0003.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">4 / 18</div>
      <img src="/assets/images/SpeedDeblur_presentation_imgs/0004.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">5 / 18</div>
      <img src="/assets/images/SpeedDeblur_presentation_imgs/0005.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">6 / 18</div>
      <img src="/assets/images/SpeedDeblur_presentation_imgs/0006.jpg" style="width:100%">
  </div>
    <div class="mySlides">
    <div class="numbertext">7 / 18</div>
      <img src="/assets/images/SpeedDeblur_presentation_imgs/0007.jpg" style="width:100%">
  </div>
      <div class="mySlides">
    <div class="numbertext">8 / 18</div>
      <img src="/assets/images/SpeedDeblur_presentation_imgs/0008.jpg" style="width:100%">
  </div>
      <div class="mySlides">
    <div class="numbertext">9 / 18</div>
      <img src="/assets/images/SpeedDeblur_presentation_imgs/0009.jpg" style="width:100%">
  </div>
      <div class="mySlides">
    <div class="numbertext">10 / 18</div>
      <img src="/assets/images/SpeedDeblur_presentation_imgs/0010.jpg" style="width:100%">
  </div>
      <div class="mySlides">
    <div class="numbertext">11 / 18</div>
      <img src="/assets/images/SpeedDeblur_presentation_imgs/0011.jpg" style="width:100%">
  </div>
      <div class="mySlides">
    <div class="numbertext">12 / 18</div>
      <img src="/assets/images/SpeedDeblur_presentation_imgs/0012.jpg" style="width:100%">
  </div>
      <div class="mySlides">
    <div class="numbertext">13 / 18</div>
      <img src="/assets/images/SpeedDeblur_presentation_imgs/0013.jpg" style="width:100%">
  </div>
      <div class="mySlides">
    <div class="numbertext">14 / 18</div>
      <img src="/assets/images/SpeedDeblur_presentation_imgs/0014.jpg" style="width:100%">
  </div>
      <div class="mySlides">
    <div class="numbertext">15 / 18</div>
      <img src="/assets/images/SpeedDeblur_presentation_imgs/0015.jpg" style="width:100%">
  </div>
      <div class="mySlides">
    <div class="numbertext">16 / 18</div>
      <img src="/assets/images/SpeedDeblur_presentation_imgs/0016.jpg" style="width:100%">
  </div>
      <div class="mySlides">
    <div class="numbertext">17 / 18</div>
      <img src="/assets/images/SpeedDeblur_presentation_imgs/0017.jpg" style="width:100%">
  </div>
      <div class="mySlides">
    <div class="numbertext">18 / 18</div>
      <img src="/assets/images/SpeedDeblur_presentation_imgs/0018.jpg" style="width:100%">
  </div>


  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>

</div>