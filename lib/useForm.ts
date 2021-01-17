const useForm = (defaultValues = {}) => (handler:any) => async (event:any) => {
  event.preventDefault()
  event.persist()
  const form = event.target
  const data = Array.from(form.elements)
    .filter((element:any) => element.hasAttribute('name'))
    .reduce(
      (object:object, element:any) => ({
        ...object,
        [element.name]: element.value,
      }),
      defaultValues
    )
  await handler(data)
  form.reset()
}

export default useForm
