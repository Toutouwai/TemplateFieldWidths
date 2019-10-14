# Template Field Widths

A module for ProcessWire CMS/CMF. Adds a "Field widths" field to Edit Template that allows you to quickly set the widths of inputfields in the template.

![screencast](https://user-images.githubusercontent.com/1538852/49207167-0cbef100-f419-11e8-965a-ca46b4f256d1.gif)

## Why?

When setting up a new template or trying out different field layouts I find it a bit slow and tedious to have to open each field individually in a modal just to set the width. This module speeds up the process.

## Installation

[Install](http://modules.processwire.com/install-uninstall/) the Template Field Widths module.

## Config options

* You can set the default presentation of the "Field widths" field to collapsed or open. 
    * Field widths entered into the Template Field Widths inputfield are only applied if the Edit Template form is submitted with the Template Field Widths inputfield in an opened state. 
    * "Collapsed" is the recommended setting if you think you might also use core inputs for setting field widths in a template context.
* You can choose Name or Label as the primary identifier shown for the field. The unchosen alternative will become the title attribute shown on hover.
* You can choose to show the original field width next to the template context field width.
