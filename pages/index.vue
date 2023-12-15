<script setup lang="ts">
useHead({ title: 'Upload your MIDI File' });

const { file, handleDrop } = useUpload()
</script>

<template>
  <div class="">
    <div class="w-screen h-screen relative grid place-items-center">
      <img src="/illustrations/bg.png" alt="" class="w-full h-full fixed z-10">
      <div class="bg-black absolute w-full h-full opacity-60 z-40"></div>

      <div class="fixed rounded-[45px] w-full max-w-lg z-50 bg-white">
        <div class="py-4 bg-[#002BC0] px-6 rounded-t-[40px]">
          <p class="text-3xl font-medium text-white">Upload your MIDI</p>
        </div>

        <div class="relative p-12" @dragover.prevent @drop="handleDrop">
          <div v-if="!file" class="w-full h-[411px] border-4 border-dashed border-gray-500 grid place-items-center rounded-3xl">
            <div class="flex flex-col space-y-6 items-center px-24">
              <div class="w-[90px] h-[90px]">
                <img src="/icons/upload.svg" class="w-full h-full">
              </div>
              <p class="text-2xl font-medium text-center">
                Drag & Drop file here or
                <span class="font-bold underline">Choose File</span>
              </p>
            </div>
          </div>

          <div v-if="file" class="w-full h-[411px] grid place-items-center rounded-3xl">
            <div class="flex flex-col space-y-6 items-center">
              <div class="w-[90px] h-[90px]">
                <img src="/icons/success-uploaded.svg" class="w-full h-full">
              </div>
              <p class="text-2xl font-medium text-center">
                Uploaded Successfully
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>