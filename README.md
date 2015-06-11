# Angular2-WhatToExpect
Presentation slides about Angular 2.

#Preview
Preview the slides online here: [https://jeremyalan.github.io/Angular2-WhatToExpect](https://jeremyalan.github.io/Angular2-WhatToExpect)

# Outline
* Intro
* Why Angular 2?
  * Performance
    * Mobile Web (low horsepower, battery life)
    * No dirty checking
    * No $scope watchers
    * Uni-directional data flow (e.g. no two-way binding)
      * Use Zones.js to detect changes (by scope)
  * Web standards
    * Classes
    * Modules
    * Web Components
      * Custom elements (custom events, properties, etc.)
      * Avoid ng-* attributes in favor of a more flexible syntax that "just works"
        e.g. ng-click, ng-change
        e.g. ng-src, ng-href

Angular 2 is component-based
 - What is a component?
 - No difference between native elements, web components and Angular components

## Use a concrete example to explain, rather than describing in words. e.g. video-player component
Web Components
  - Custom Elements
  - Shadow DOM
  - HTML Imports
  
  * Component API
    * Properties - state of the component
	  * Methods - behavior of the component
	  * Events - notifies listeners of state changes
	  
	  !!! These are not affected by the (visual) template !!! 
  
  * Logical
    * Written in JavaScript
    * Controllers, Services, etc.
    * Nested Components
  * Visual
    * Template (View)
	  * Look n' feel
	  * Describes how a component should be rendered
	  * Single component may have multiple templates
	    e.g. Mobile vs. Desktop
  		e.g. Bootstrap vs. Foundation
	  
	  * Shadow DOM
	    * Enforces logical separation between components
      * The internal structure of the component is hidden (encapsulated)
		  * All interactions use (logical) Component API
        * e.g. .select(), .selected = false
        * e.g. You can't use jQuery or DOM selector APIs to modify internal elements

Template Syntax
  * Highly recommended: Keynote by Misko Hevery (ng-conf 2015)
  * Examples
    * String literal (supports interpolation via {{ }})
      <panel title="Hello {{ name }}!">...</panel>
      
    * Property binding
      <panel [title]="title">...</panel>
      
    * Event binding
      <button (click)="addItem($event)"></button>
  * Advanced Topics
    * Ref binding
      <input #name />
    
    * Microsyntax
      e.g. *ng-for
    * Pipes
      e.g. {{ name | uppercase }}
      
      * Replaces filters in Angular v1

    * Templates
      e.g. *ng-for *ng-if
      
      * Replaces compile/link & "transclusion" in Angular v1
      * Supports multiple child templates
        e.g. <content select="[head]"></content>

Angular Components
  * No $scope!
  * ES6 Classes (preferred syntax)
  * Annotations
    * Components
      e.g. <panel title="My Profile">...</panel>
      
      * Triggered via CSS Selector, usually a custom tag name
      * Only one component (per HTML Element) is allowed
    * Views
      * Must be paired with a component (is this true??)
      * Provides the template used to render the component
      * Supports multiple templates per component for flexible rendering
    * Directives
      e.g. <i class="icon-help" tooltip="Click here to learn more"></i>
      a
      * Triggered via CSS Selector, usually an attribute
      * Not a stand-alone component, does not have a View counterpart
      * Extends the behavior of an existing component (or native element)
      * Multiple Directives are allowed
    * Dependency Injection
      * Dependencies declared by imported type, not by key
      * No shared $scope between directives
        * Alternatively, inject components using imported type and @Parent + @Ancestor + @Self annotations
      * Use @Provide annotation to replace services at run-time
        * Replaces _module.decorator(...) in Angular v1

Forms
  * No two-way data binding
  * Use FormBuilder to define form fields

Router
  * ???

What's missing?
  * angular.module(...)
  * $scope
  * Two-way data binding
  * Controllers
  * DDO (Directive Definition Object)
  * Transclusion



Other stuff
  * Browser support
  * Resources: links to docs, Github issues, Gitter channel, etc.