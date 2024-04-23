import { DirectiveBinding } from 'vue';

const ContextMenu = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const menu = binding.value.menuOptions // 获取传入的菜单数据
    const className = binding.value.className
    if (!menu) return

    el.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // 创建一个菜单元素并添加到body
      const menuElements = document.querySelectorAll('.'+className);
      menuElements.forEach((menuElement) => {
        menuElement.remove();
      });
      const menuElement = document.createElement('div');
      menuElement.className = className + ' text-caption'
      menuElement.style.position = 'absolute';
      menuElement.style.left = `${mouseX}px`;
      menuElement.style.top = `${mouseY}px`;
      menuElement.style.backgroundColor = 'white';
      menuElement.style.zIndex = '1000';
      menuElement.style.border = '1px solid #DCDFE6';
      menuElement.style.borderRadius = '10px'
      menuElement.style.boxShadow = `var(--el-box-shadow-light)`

      // 构建菜单项
      menu.forEach((item:any) => {
        const menuItem = document.createElement('div');
        menuItem.innerHTML = item.icon ? '<el-icon color="#000000">'+item.icon+'</el-icon><span class="ml-4">'+item.label+'</span>':item.label
        menuItem.className = 'context-menu-item d-flex flex-row justify-start align-center';
        menuItem.style.padding = '5px';
        menuItem.style.cursor = 'pointer';
        menuItem.addEventListener('click', item.action);
        menuElement.appendChild(menuItem);
      });

      document.body.appendChild(menuElement);
    });
  },
};

export default ContextMenu;
