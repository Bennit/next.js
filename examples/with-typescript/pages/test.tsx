class TestA {

    foo: string;

    constructor(foo: string) {
        this.foo = foo;
    }

    getFoo() {
        return this.foo;
    }

}

class TestB {
    constructor(private foo: string) {

    }

    getFoo() {
        return this.foo;
        // TS does not complain, however it will return undefined
    }
}

const testA = new TestA('bar');
const testB = new TestB('bar');

export default () => (
    <pre>{`
    testA.foo = ${testA.getFoo()}
    testB.foo = ${testB.getFoo()}
    `}</pre>
)
