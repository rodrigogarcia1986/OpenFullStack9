interface TotalPros {
    count: number
}

const Total = (props: TotalPros) => {

    return (
        <div>
            <p>
                Number of exercises{" "}{props.count}                
      </p></div>
    )
}

export default Total