function Container({children}) {
  return (
    <div className="max-w-sm sm:max-w-xl md:max-w-3xl xl:max-w-7xl mx-auto">
      {children}
    </div>
  )
}

export default Container;
