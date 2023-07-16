package main

import (
	"fmt"
	"github.com/adhocore/fast"
	"strconv"
)

func Connection() string {
	//result := "Checking internet speed!"
	fmt.Println("Checking internet speed!")

	noUpload := false
	res, _ := fast.Measure(noUpload)

	fmt.Println("Got internet speed")

	uploadSpeed, _ := strconv.ParseFloat(res.Up, 8)
	downloadSpeed, _ := strconv.ParseFloat(res.Up, 8)
	if uploadSpeed > 1.5 && downloadSpeed > 1.5 {
		result := "Great! You are ready to join"
		return result
	}

	result := "Oops! Follow these steps for low bandwidth" + "\n" +
		"Disable HD video: Go to Settings - Click on the Video tab - Uncheck the box for HD video" + "\n" +
		"If problems persist, disable video feed: Click on the video icon - Ensure ‘Start Video’ button is crossed out" + "\n" +
		"For no connectivity follow the below steps:" + "\n" +
		"1. Check internet connectivity" + "\n" +
		"2.Use the network troubleshooter" + "\n" +
		"3.Update network drivers using Advanced Driver Updater" + "\n" +
		"4.Restart modem" + "\n" +
		"5.Reboot router" + "\n" +
		"6.Refresh IP address`" + "\n"

	return result

}
