package main

import (
	"fmt"
	"github.com/gordonklaus/portaudio"
	"log"
	"time"
)

func Microphone() string {
	fmt.Println("Checking microphone access")

	err := portaudio.Initialize()
	if err != nil {
		log.Fatalf("Failed to initialize PortAudio: %s", err)
	}
	defer portaudio.Terminate()

	// Open a stream with default settings
	stream, err := portaudio.OpenDefaultStream(1, 0, float64(44100), 0, processAudio)
	if err != nil {
		log.Fatalf("Failed to open stream: %s", err)
	}
	defer stream.Close()

	fmt.Println("Starting microphone")

	// Start capturing audio
	err = stream.Start()

	if err != nil {
		log.Fatalf("Failed to start stream: %s", err)
	}
	fmt.Println("Listening for audio...")
	time.Sleep(10 * 1000) // Sleep for 5 seconds

	err = stream.Stop()
	if err != nil {
		fmt.Printf("Failed to stop audio stream: %v\n", err)
		return "Microphone access failed"
	}

	return "Microphone is working"

}

func processAudio(in [][]float32) {
	// Do nothing with the audio data
	for i := 0; i < 10 && i < len(in); i++ {
		fmt.Println("Sample:", in[i])
	}
}
