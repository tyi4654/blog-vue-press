---
title: 按钮
---

## Button 按钮

### 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

::: demo 常用的操作按钮示例

```vue
<el-button v-for="button in buttons" :type="button.type" :key="button.text">
  {{ button.text }}
</el-button>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
    setup() {
        const buttons = [
            { type: '', text: 'plain' },
            { type: 'primary', text: 'primary' },
            { type: 'success', text: 'success' },
            { type: 'info', text: 'info' },
            { type: 'warning', text: 'warning' },
            { type: 'danger', text: 'danger' }
        ]
        return {
            buttons
        }
    }
})
</script>
```

:::
