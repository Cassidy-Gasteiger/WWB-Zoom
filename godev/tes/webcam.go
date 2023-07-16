package main

import (
	"fmt"
	"gocv.io/x/gocv"
)

func WebCam() string {

	webcam, err := gocv.VideoCaptureDevice(0)
	if err != nil {
		fmt.Printf("Failed to open webcam: %v\n", err)
		return "Failed to open webcam, Please enable webcam in the system"
	}
	defer webcam.Close()

	// Read a frame from the webcam
	frame := gocv.NewMat()
	defer frame.Close()

	if ok := webcam.Read(&frame); !ok {
		fmt.Println("Failed to read frame from webcam")
		return "Failed to read frame from webcam"
	}

	// Check if the frame is empty
	if frame.Empty() {
		fmt.Println("Webcam is not working")
		return "Webcam is not working"
	}

	fmt.Println("Webcam is working")
	return "Webcam is working"
}
