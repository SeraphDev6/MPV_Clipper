# Video Clipper
This mpv extension was designed to help researchers at The Ohio State University by providing a utility which enables them to break a video into predetermined length clips, pausing or looping the video at the end of the clip, and allowing simple navigation between clips using the arrow keys.

## Use and Citation
This Software is being provided free of charge in accordance with the GNU General Public Licence Version 3, see License for details. If you use this software in your research please cite Julianna Calabrese and Wesley Giles (Version 1.0; Calabrese & Giles, 2022)

## Installation
Use of the clipper requires a working installation of mpv. For Details on how to install mpv click [here](https://mpv.io/installation/)

To install the clipper to be used by mpv navigate into your mpv scripts file using the command:
`cd ~/.config/mpv/scripts/`

If this directory does not exist create it using:
`mkdir ~/.config/mpv/scripts/` and rerun the previous command

Once you are in the scripts directory clone this repository into the folder using:
`git clone https://code.osu.edu/giles.190/mpv-clipper.git clipper`

Once the folder has been cloned, you are all set up and ready to use the clipper!

## Use
To use the clipper we will run a mpv command with the `--script-opts=` flag along with the following options seperated by a comma.

(*Italicized* text indictaes the default value)

### clipper-clipped (yes|*no*)
This option determines whether or not the clipper will be used on the video file

**You must enable this to use the clipper**

example: `mpv path/to/your/video/file.mp4 --script-opts=clipper-clipped=yes`

### clipper-duration (number,*3*)
This option determines how long (in seconds) each clip will be.

example: `mpv path/to/your/video/file.mp4 --script-opts=clipper-clipped=yes,clipper-duration=4`


### clipper-clip_index (number,*0*)
This option determines which clip the player will start on, 0 being the first clip of the file

example: `mpv path/to/your/video/file.mp4 --script-opts=clipper-clipped=yes,clipper-clip_index=2`

### clipper-looping (yes|*no*)
This option determines if the clips loop or pause once they are done playing

example: `mpv path/to/your/video/file.mp4 --script-opts=clipper-clipped=yes,clipper-looping=yes`

You can combine as many of the options together in one command for example:

`mpv path/to/your/video/file.mp4 --script-opts=clipper-clipped=yes,clipper-duration=4,clipper-clip_index=2,clipper-looping=yes`

## Player Controls
Once the video has been opened using the commands above, you can control the behavior using the following keys:

### Left and Right Arrows
The Left and Right arrows allow you to navigate through the clips going back with the left arrow and forward with the right

Note: if the video is paused the left arrow will take you to the beginning of the current clip instead of to the previous clip

### L key
The L key will toggle the looping behavior

Note: if the video is paused the L key will resume playing the video

### Customization
These keys can be changed to suit your preferences using the keybind command available in mpv. More details [here](https://mpv.io/manual/master/#command-interface-keybind-%3Cname%3E-%3Ccommand%3E)

The names of the commands are looping, go_back_one, and go_forward_one

## Questions, Concerns, and Feature Requests
Please contact Wesley Giles with any questions, concerns, or feature requests at [Wesley@seraphdev.com](mailto:wesley@seraphdev.com)