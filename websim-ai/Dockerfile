FROM ubuntu:18.04

RUN apt update

RUN DEBIAN_FRONTEND=noninteractive apt install -y python3 python-opencv python3-opencv ffmpeg imagemagick chromium-browser python3-selenium chromium-chromedriver

# Replace 1000 with your user / group id
RUN export uid=1000 gid=1000 && \
    mkdir -p /home/developer && \
    echo "developer:x:${uid}:${gid}:Developer,,,:/home/developer:/bin/bash" >> /etc/passwd && \
    echo "developer:x:${uid}:" >> /etc/group && \
    chown ${uid}:${gid} -R /home/developer

USER developer
ENV HOME /home/developer
CMD /bin/bash
