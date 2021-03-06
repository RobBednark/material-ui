---
components: Icon, SvgIcon
---

# Icons

## System icons

A [system icon](https://material.io/design/iconography/system-icons.html) or UI icon,
symbolizes a command, file, device, or directory.
System icons are also used to represent common actions like trash, print, and save,
and are commonly found in app bars, toolbars, buttons, and lists.
Google has provided a set of [Material icons](https://material.io/tools/icons/?style=baseline) that follow these guidelines.

Material-UI provides two components to render system icons: `Icon` for rendering font icons, and `SvgIcon` for rendering SVG paths.

### SVG Icons

The `SvgIcon` component takes an SVG `path` element as its child and converts it to a React component that displays the path,
and allows the icon to be styled and respond to mouse events.

The resulting icon can be used as is,
or included as a child for other Material-UI components that use icons.
By default, an Icon will inherit the current text color.
Optionally, you can set the icon color using one of the theme color properties: `primary`, `secondary`, `action`, `error` & `disabled`.

{{"demo": "pages/style/icons/SvgIcons.js"}}

#### SVG Material icons

It's interesting to have the building blocks needed to implement custom icons, but what about presets?
We provide a separate NPM package,
[@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons),
that includes the 900+ official [Material icons](https://material.io/tools/icons/?style=baseline) converted to `SvgIcon` components.

<a href="https://material.io/tools/icons/?icon=3d_rotation&style=baseline">
  <img src="/static/images/icons/icons.png" style="width: 644px" />
</a>

You can use [material.io/tools/icons](https://material.io/tools/icons/?style=baseline) to find a specific icon.
When importing an icon, keep in mind that the names of the icons are `PascalCase`, for instance:
- [`alarm`](https://material.io/tools/icons/?icon=alarm&style=baseline) is exposed as `@material-ui/icons/Alarm`
- [`alarm off`](https://material.io/tools/icons/?icon=alarm_off&style=baseline) is exposed as `@material-ui/icons/AlarmOff`

There is one exception to this rule: 
- [`3d_rotation`](https://material.io/tools/icons/?icon=3d_rotation&style=baseline) is exposed as `@material-ui/icons/ThreeDRotation`.

{{"demo": "pages/style/icons/SvgMaterialIcons.js"}}

#### More SVG icons
Looking for even more SVG icons? There are a lot of projects out there,
but [https://materialdesignicons.com](https://materialdesignicons.com/) provides over 2,000 official and community provided icons.
[mdi-material-ui](https://github.com/TeamWertarbyte/mdi-material-ui) packages these icons as Material-UI SvgIcons in much the same way as [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons) does for the official icons.

### Font Icons

The `Icon` component will display an icon from any icon font that supports ligatures.
As a prerequisite, you must include one, such as the
[Material icon font](http://google.github.io/material-design-icons/#icon-font-for-the-web) in your project, for instance, via Google Web Fonts:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

`Icon` will set the correct class name for the Material icon font. For other fonts, you must supply the
class name using the Icon component's `className` property.

To use an icon simply wrap the icon name (font ligature) with the `Icon` component,
for example:
```jsx
<Icon>star</Icon>
```

By default, an Icon will inherit the current text color.
Optionally, you can set the icon color using one of the theme color properties: `primary`, `secondary`, `action`, `error` & `disabled`.

{{"demo": "pages/style/icons/Icons.js"}}
