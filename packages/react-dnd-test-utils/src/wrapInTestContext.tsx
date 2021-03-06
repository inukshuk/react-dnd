import * as React from 'react'
import TestBackend from 'react-dnd-test-backend'
import { DragDropContext } from 'react-dnd'

export function wrapInTestContext(DecoratedComponent: any): any {
	const TestStub = (props: any) => <DecoratedComponent {...props} />
	return DragDropContext(TestBackend)(TestStub)
}
