import cv2

def main(rawImage, iteration):
    # Exit no matter what after 100 iterations
    if iteration > 100:
        return True, ''

    # New image for output
    outputImage = rawImage.copy()

    # Show Diagnostic Output
    cv2.imshow('Robot Output', outputImage)

    # Send a key to the browser
    return False, 'w'
