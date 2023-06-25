const IMAGES = [
  'https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  'https://media.istockphoto.com/id/474067064/photo/wireframe-villa.webp?b=1&s=170667a&w=0&k=20&c=7TA3bkpcmpWnPk79yz_r9T1wYlcyE9ClTdnhJ1d4FxA=',
  'https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  'https://plus.unsplash.com/premium_photo-1678170312428-8f42c0e9a403?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
]
export const getImageUri = (default_index?: number) => {
  const maxLength = IMAGES.length - 1
  let index = default_index
  if (typeof default_index !== 'number') {
    index = parseInt('' + Math.floor(Math.random() * maxLength))
    index = Math.max(0, Math.min(index, maxLength))
  }
  return IMAGES[index || 0]
}
