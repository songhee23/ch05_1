export const imageFileReaderP = (file: Blob) =>
  new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = (e: ProgressEvent<FileReader>) => {
      const result = e.target?.result // base64 인코딩 결과

      if (result && typeof result === 'string') resolve(result)
      else reject(new Error(`imageFileReaderP: can't read image file`))
    }
    fileReader.readAsDataURL(file)
  })
