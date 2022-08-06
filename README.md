# Template Field Widths

Adds a "Field widths" field to Edit Template that allows you to quickly set the widths of inputfields in the template. 

Since v0.2.0 the module also adds a similar field to the settings of Edit Field for Repeater and Repeater Matrix allowing you to quickly set the widths of inputfields within the Repeater field, or within each Repeater Matrix type.

Note: widths are only saved if the edit form is submitted with the "Field widths" field in an open (non-collapsed) state.

### Edit template

![Template field widths screencast](https://user-images.githubusercontent.com/1538852/49207167-0cbef100-f419-11e8-965a-ca46b4f256d1.gif)

### Edit Field: Repeater

![Repeater field widths](https://user-images.githubusercontent.com/1538852/183234669-52f9c13e-da60-44e0-95f7-c7f244e861ce.png)


### Edit Field: Repeater Matrix

![Repeater matrix field widths](https://user-images.githubusercontent.com/1538852/183234670-c3a59d29-c844-4f7d-9ec6-8031cd1b694b.png)

## Why?

When setting up a new template/repeater or trying out different field layouts I find it a bit slow and tedious to have to open each field individually in a modal just to set the width. This module speeds up the process.

## Config options

* You can set the default presentation of the "Field widths" field to collapsed or open. 
    * Widths entered into the "Field widths" field are only applied if the edit form is submitted with the field in an open (non-collapsed) state. 
    * "Collapsed" is the recommended setting if you think you might also use core inputs for setting field widths in a template context.
* You can choose Name or Label as the primary identifier shown for the field. The unchosen alternative will become the title attribute shown on hover.
* You can choose to show the original field width next to the template context field width.
