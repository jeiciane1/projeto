import { db } from "../config/firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, onSnapshot } from "firebase/firestore";

export async function cadastrarProdutos(data) {
    try {
        await addDoc(collection(db, 'Cantores'), data)
        return 'sucesso'
    } catch (error) {
        return 'erro'
    }
}

export async function buscarProdutos() {
    try {
        const querySnapshot = await getDocs(collection(db, 'Cantores'))
        let produtos = []
        querySnapshot.forEach((doc) => {
            let produto = { id: doc.id, ...doc.data() }
            produtos.push(produto)
        });
        return produtos
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function atualizarProdutos(produtoID, data) {
    try {
        const produtoRef = doc(db, 'Cantores', produtoID)
        await updateDoc(produtoRef, data)
        return 'ok'
    } catch (error) {
        console.log(error)
        return 'error'
    }

}

export async function deletarProdutos(produtoID) {
    try {
        const produtoRef = doc(db, 'Cantores', produtoID)
        await deleteDoc(produtoRef)
        return 'ok'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}

export async function pegarProdutoTempoReal(setProdutos) {
    const ref = query(collection(db, 'Cantores'))
    onSnapshot(ref, (querySnapshot) => {
        const produtos = []
        querySnapshot.forEach((doc) => {
            produtos.push({ id: doc.id, ...doc.data() })
        })
        setProdutos(produtos)
    })
}