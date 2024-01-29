// routing

export type RouteType = {
    title: string
    url: string
}

export type NavigatorPropsType = {
    title: string
    url: string
}

// component

export type ComponentPropsType = {
    params: {
        id: string
    }
}

// main

export type FeatureType = {
    headline: string
    text: string
}

// docs

export interface MethodExample {
    methodArguments: any[]  
    result: any
}

export interface MethodExampleCard {
    values: string[],
    methodArguments: any[]  
    result: any
}

export interface MethodCardProps {
    id: string
    title: string
    lines: number
}

export type MethodType = {
    id: string
    title: string
    description: string
    values: string[]
    lines: number
    examples: MethodExample[]
}

// codebox

export type CodeBoxStoreType = {
    currentMethod: string
    values: string[]
}

export interface CodeBoxArgumentInterface {
    title: string,
    isBrackets: boolean
}