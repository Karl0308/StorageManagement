
import { supabase } from '../lib/supabase';
import { Box, BoxModel } from './Models/Box';
import { Item, ItemModel } from './Models/Item';
import { RackModel, Rack } from './Models/Rack';

export class StorageRepository {

  //Rack
  async createRack(rack: RackModel): Promise<Rack | null> {
    const { data, error } = await supabase
      .from('racks')
      .insert([rack])
      .single(); 

    if (error) {
      throw new Error(`Error creating Rack: ${error.message}`);
    }

    return data as Rack; 
  }
  

  async getRackById(id: string): Promise<Rack | null> {
    const { data, error } = await supabase
      .from('racks')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(`Error fetching Rack: ${error.message}`);
    }

    return data as Rack;
  }

  async getRacks(): Promise<Rack[]> {
    const { data, error } = await supabase
      .from('racks')
      .select('*');

    if (error) {
      throw new Error(`Error fetching Racks: ${error.message}`);
    }

    return data as Rack[]; 
  }

  async updateRack(id: string, updates: Partial<RackModel>): Promise<Rack | null> {
    const { data, error } = await supabase
      .from('racks')
      .update(updates)
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(`Error updating Rack: ${error.message}`);
    }

    return data as Rack; 
  }

  async deleteRack(id: string): Promise<boolean> {
    const { error } = await supabase
      .from('racks')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(`Error deleting Rack: ${error.message}`);
    }

    return true; 
  }






  //Box
  async createBox(box: BoxModel): Promise<Box | null> {
    const { data, error } = await supabase
      .from('boxes')
      .insert([box])
      .single(); 

    if (error) {
      throw new Error(`Error creating Box: ${error.message}`);
    }

    return data as Box; 
  }
  

  async getBoxById(id: string): Promise<Box | null> {
    const { data, error } = await supabase
      .from('boxes')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(`Error fetching Box: ${error.message}`);
    }

    return data as Box;
  }

  async getBoxes(): Promise<Box[]> {
    const { data, error } = await supabase
      .from('boxes')
      .select('*');

    if (error) {
      throw new Error(`Error fetching Box: ${error.message}`);
    }

    return data as Box[]; 
  }

  async updateBox(id: string, updates: Partial<BoxModel>): Promise<Box | null> {
    const { data, error } = await supabase
      .from('boxes')
      .update(updates)
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(`Error updating Box: ${error.message}`);
    }

    return data as Box;
  }

  async deleteBox(id: string): Promise<boolean> {
    const { error } = await supabase
      .from('boxes')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(`Error deleting Box: ${error.message}`);
    }

    return true; 
  }











  //Item
  async createItem(item: ItemModel): Promise<Item | null> {
    const { data, error } = await supabase
      .from('items')
      .insert([item])
      .single(); 

    if (error) {
      throw new Error(`Error creating Item: ${error.message}`);
    }

    return data as Item; 
  }
  

  async getItemById(id: string): Promise<Item | null> {
    const { data, error } = await supabase
      .from('items')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(`Error fetching Item: ${error.message}`);
    }

    return data as Item;
  }

  async getItems(): Promise<Item[]> {
    const { data, error } = await supabase
      .from('items')
      .select('*');

    if (error) {
      throw new Error(`Error fetching Item: ${error.message}`);
    }

    return data as Item[]; 
  }

  async updateItem(id: string, updates: Partial<ItemModel>): Promise<Item | null> {
    const { data, error } = await supabase
      .from('items')
      .update(updates)
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(`Error updating Item: ${error.message}`);
    }

    return data as Item; 
  }

  async deleteItem(id: string): Promise<boolean> {
    const { error } = await supabase
      .from('items')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(`Error deleting Item: ${error.message}`);
    }

    return true; 
  }

}
