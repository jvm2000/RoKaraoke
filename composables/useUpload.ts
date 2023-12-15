import { defineEmits, toRefs } from 'vue'

type State = {
  file: File | null;
}

const state: State = reactive({
  file: null,
});

export default function () {
  function handleDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      state.file = files[0]
    }
  }

  function clearFile() {
   state.file = null;
  }

  return {
    ...toRefs(state),
    handleDrop,
    clearFile,
  }
}