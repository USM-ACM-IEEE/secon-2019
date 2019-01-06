# NOTE: THIS IS JUST THE TEST HARNESS, EDIT ROBOT.PY INSTEAD!

# Library imports
import cv2
import numpy as np
from selenium import webdriver

# User imports
import robot

# Configure Chromium to run headless at a convenient window size
chrome_options = webdriver.chrome.options.Options()
chrome_options.add_argument('headless')
chrome_options.add_argument('window-size=1100x1450')

# Launch Chromium in the background
driver = webdriver.Chrome('/usr/lib/chromium-browser/chromedriver', chrome_options=chrome_options)

# Load the page under test
driver.get('http://www.mlaga97.space/seconsim2019/index.html');

# Find the SVG tag that represents the field
root = driver.find_element_by_xpath('/*')
canvas = driver.find_element_by_tag_name('svg')

# Iterate through the user code
done = False
iteration = 0
while not done:
    # Get image from selenium
    png = driver.get_screenshot_as_png()
    nparr = np.frombuffer(png, np.uint8)
    raw = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    # Crop everything but the field
    cropped = raw[79:1045, 60:1026].copy()

    # Run the user code
    done, keys = robot.main(cropped, iteration)

    # Update counter
    iteration += 1

    # Display output
    root.send_keys(keys)
    cv2.imshow('Browser Output', cropped)

    # Give OpenCV a chance to refresh
    cv2.waitKey(1)

# Exit Chromium
driver.quit()

# Exit on any keypress
cv2.waitKey(0)
