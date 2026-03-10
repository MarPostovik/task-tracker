# CSS Computed Styles Investigation Report

## Selected Element
For this investigation, we selected a task `<li>` element with the classes `.task.completed.urgent` (a task that is both urgent and marked as completed). This element demonstrates interaction between multiple CSS sources: base `.task` rules, `.completed` and `.urgent` classes, CSS variables, and pseudo-elements.

---

## Analyzed CSS Properties

### 1. `background-color`
- **Computed value (DevTools):** `#ffefef`
- **Styles panel origin:** `.task.urgent { --task-bg: $urgent-bg; }`  
- **Generated CSS location:** `_components.scss` line 32  
- **Trace to authored source:** `$urgent-bg: #ffefef;` in `_variables.scss`  
- **Notes:** The final background comes from a CSS variable overridden by the `.urgent` class.

### 2. `color`
- **Computed value (DevTools):** `gray`
- **Styles panel origin:** `.task.completed { --task-color: $completed-color; }`  
- **Generated CSS location:** `_components.scss` line 27  
- **Trace to authored source:** `$completed-color: gray;` in `_variables.scss`  
- **Notes:** The color is applied via a CSS variable, overriding the base `.task` color. Conditional class `.completed` triggers this override.

### 3. `border-color`
- **Computed value (DevTools):** `rgb(62, 188, 62)` (green)
- **Styles panel origin:** `.task.completed { border-color: rgb(62, 188, 62) !important; }`  
- **Generated CSS location:** `_components.scss` line 27  
- **Trace to authored source:** Hard-coded in `_components.scss` using `!important` for completed tasks  
- **Notes:** Even though `.urgent` also defines `border-color`, the completed rule overrides it via `!important`. This demonstrates CSS cascade and specificity.

### 4. `box-shadow`
- **Computed value (DevTools):** `0 8px 20px rgba(0, 0, 0, 0.12)` (on hover)
- **Styles panel origin:** `.task:hover { box-shadow: $hover-shadow; }`  
- **Generated CSS location:** `_components.scss` line 22  
- **Trace to authored source:** `$hover-shadow: 0 8px 20px rgba(0,0,0,0.12);` in `_variables.scss`  
- **Notes:** This property is only active on hover. DevTools shows the effect of pseudo-classes combined with variable substitution.

### 5. `border-radius`
- **Computed value (DevTools):** `10px`  
- **Styles panel origin:** `.task { border-radius: $radius; }`  
- **Generated CSS location:** `_components.scss` line 9  
- **Trace to authored source:** `$radius: 10px` in `_variables.scss`  

---

## Cases Where Mapping Becomes Ambiguous or Indirect

1. For `border-color`, both `.task.completed` and `.task.urgent` define a value. The `!important` rule or order in generated CSS determines which wins.

2.  Hover transform (`transform: translateY(-2px)`) 
   - Applied only on hover via `.task:hover`.  
   - DevTools shows it in the "Computed" panel only while hovering

3. Interaction between parent (`.task`) and child (`.task-label`, `.task-text`)
- The computed layout (flex alignment, padding, spacing) results from both parent and child rules.  
- For example, `.task` sets `display: flex; justify-content: space-between;` and `.task-label` sets `gap: 10px;`. The combination affects spacing and alignment, but DevTools only shows final computed values, so mapping individual rules requires careful inspection.